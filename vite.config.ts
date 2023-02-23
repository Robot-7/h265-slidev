
import path from 'path';
import alias from '@rollup/plugin-alias';
import { defineConfig, UserConfigExport } from 'vite';

const config: UserConfigExport = {
    plugins: [
        alias({
            entries: [{ find: '@', replacement: path.resolve(__dirname, './') }],
        }) as any,
    ],
};


export default defineConfig(config);
