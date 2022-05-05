import  "styled-components";

declare module 'styled-components'{
    export interface DefaultTheme{
        title: string;

        colors: {
            primary: string;
            secundary: string;
            bar: string;
            text: string;
            iconscolor: string;
            spamcolor: string;
            navIcons: string;
        }
    }
}