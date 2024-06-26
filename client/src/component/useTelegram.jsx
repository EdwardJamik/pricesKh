import {useEffect} from "react";

export function useTelegram() {
    const webApp = window.Telegram.WebApp
    // webApp.headerColor = '#392019'
    // webApp.backgroundColor = '#392019'

    const user = webApp.initDataUnsafe?.user
    const platform = webApp.platform

    useEffect(() => {
        let animationFrameId;
        const handleViewportChanged = async () => {
            if (!webApp.isExpanded) {
                await webApp.expand();
            }
            animationFrameId = requestAnimationFrame(handleViewportChanged);
        };

        webApp.onEvent('viewportChanged', handleViewportChanged);

        handleViewportChanged();

        return () => {
            webApp.offEvent('viewportChanged', handleViewportChanged);
            cancelAnimationFrame(animationFrameId);
        };
    }, [webApp]);

    return {
        webApp,
        user,
        platform,
    }
}