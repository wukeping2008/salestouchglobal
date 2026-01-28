import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export interface EmailTemplate {
    id: string;
    name: string;
    subject: string;
    content: string;
}

class MarketingService {
    private templateDir: string;

    constructor() {
        this.templateDir = path.resolve(__dirname, '../templates/emails');
    }

    async getTemplates(): Promise<EmailTemplate[]> {
        const templates = [
            {
                id: 'strategy-simulator',
                name: 'The Strategy Simulator',
                subject: 'Practice before the pitch, {{firstName}}',
                file: 'strategy-simulator.html'
            },
            {
                id: 'one-page-magic',
                name: 'The One-Page Magic',
                subject: 'Stop spending hours on sales decks',
                file: 'one-page-magic.html'
            }
        ];

        return templates.map(t => {
            const filePath = path.join(this.templateDir, t.file);
            const content = fs.readFileSync(filePath, 'utf-8');
            return {
                id: t.id,
                name: t.name,
                subject: t.subject,
                content
            };
        });
    }

    async previewTemplate(id: string, variables: Record<string, string>): Promise<string> {
        const templates = await this.getTemplates();
        const template = templates.find(t => t.id === id);

        if (!template) throw new Error('Template not found');

        let processed = template.content;
        Object.entries(variables).forEach(([key, value]) => {
            const regex = new RegExp(`{{${key}}}`, 'g');
            processed = processed.replace(regex, value);
        });

        return processed;
    }
}

export const marketingService = new MarketingService();
