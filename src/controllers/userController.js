const { z } = require('zod');
const UserSettings = require('../models/UserSettings');

const userSettingsSchema = z.object({
  preferredTheme: z.enum(['light', 'dark', 'system']),
  resultsPerPage: z.number().int().min(20).max(100),
  sendEmail: z.boolean(),
});

const getUserSettings = async ({ params }, res) => {
  const userId = params.userId;
  try {
    const userSettings = await UserSettings.findOne({
      where: { userId: +userId },
    });
    res.json(userSettings);
  } catch (error) {
    console.error('Error fetching user settings:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const updateUserSettings = async ({ params, body }, res) => {
  const userId = params.userId;

  try {
    const validatedSettings = userSettingsSchema.parse(body);

    const [updatedRowsCount, updatedSettings] = await UserSettings.update(
      validatedSettings,
      {
        where: { userId: +userId },
        returning: true,
      }
    );

    if (updatedRowsCount === 0) {
      res.status(404).json({ error: 'User not found' });
    }

    res.json(updatedSettings[0]);
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error({ error: 'Invalid request body', details: error.errors });
      res
        .status(400)
        .json({ error: 'Invalid request body', details: error.errors });
    } else {
      console.error('Error updating user settings:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
};

module.exports = {
  getUserSettings,
  updateUserSettings,
};
