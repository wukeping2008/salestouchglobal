import { Router } from 'express';
import { marketingService } from '../services/marketingService.js';

const router = Router();

// Get all available cold email templates
router.get('/templates', async (req, res) => {
    try {
        const templates = await marketingService.getTemplates();
        res.json(templates);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

// Preview a specific template with mock data
router.get('/preview/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const mockData = {
            firstName: 'John',
            trialUrl: 'https://longarena.ai/trial',
            demoUrl: 'https://longarena.ai/demo'
        };

        const html = await marketingService.previewTemplate(id, mockData);
        res.send(html);
    } catch (error: any) {
        res.status(404).json({ error: error.message });
    }
});

export default router;
