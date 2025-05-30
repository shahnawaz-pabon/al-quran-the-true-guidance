import fs from 'fs';
import path from 'path';

const DATA_PATH = path.join(process.cwd(), 'src/data');

export function getAllSurahs() {
    const filePath = path.join(DATA_PATH, 'surahs.json');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContents);
}

export function getSurahByNumber(number: number) {
    const filePath = path.join(DATA_PATH, 'surahs', `${number}.json`);
    try {
        const fileContents = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(fileContents);
    } catch (error) {
        return null;
    }
}

export function getAllSurahNumbers() {
    const surahs = getAllSurahs();
    return surahs.map((surah: any) => surah.number);
}