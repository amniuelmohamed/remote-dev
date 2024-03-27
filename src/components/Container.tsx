type ContainerProps = {
    children: React.ReactNode;
    isFullHeight?: boolean;
};

export default function Container({ children, isFullHeight }: ContainerProps) {
    return (
        <main
            className={`relative flex container mx-auto bg-white ${
                isFullHeight ? "min-h-[644px]" : "h-[644px]"
            } sm:rounded-xl shadow-lg overflow-hidden`}
        >
            {children}
        </main>
    );
}
