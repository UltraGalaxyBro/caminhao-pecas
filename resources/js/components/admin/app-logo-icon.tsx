import { ImgHTMLAttributes } from 'react';

export default function AppLogoIcon(props: ImgHTMLAttributes<HTMLImageElement>) {
    return (
        <img 
            src="/logo.webp" 
            alt="Caminhão Peças logo"
            {...props}
            style={{
                width: props.width || 'auto',
                height: props.height || 'auto',
                ...props.style
            }}
        />
    );
}
