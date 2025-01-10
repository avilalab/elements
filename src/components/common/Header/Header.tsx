import { useRef } from 'react';
import '../../../scss/style.scss';

export function Header() {
        const header = useRef<HTMLHeadingElement>(null);

    // useEffect(() => {
    //     setThemeController('landing');
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);

    // useEffect(() => {
    //     switch (ScrollState) {
    //         case 'initial':
    //             if (header.current) header.current.removeAttribute('data-stuck');
    //             break;

    //         case 'scrolling':
    //             if (header.current) header.current.setAttribute('data-stuck', '');
    //             break;
    //     }
    // }, [ScrollState]);

    return (
        <header ref={header} className="header">
            <div className="header-wrapper">
                <div className="header-container">
                    <h1>Hello World!</h1>
                </div>
            </div>
        </header>
    );
}