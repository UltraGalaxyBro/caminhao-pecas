import AppLogoIcon from './app-logo-icon';

export default function AppLogo() {
    return (
        <div className="flex items-center space-x-2">
            <div className="flex size-14 items-center justify-center">
                <AppLogoIcon className="size-10" />
            </div>
            <div className="hidden lg:flex flex-row leading-tight">
                <span className="text-xl font-extrabold text-black dark:text-white">
                    <em>Caminhão Peças</em>
                </span>
            </div>
        </div>
    );
}

