interface TitleProps {
    label: string;
    className?: string;
    lowercase?: boolean;
}

const Title = ({ label, className, lowercase }: TitleProps) => {
    const hasTextSize = className?.includes('text-') ?? false;
    const defaultTextSize = hasTextSize ? '' : 'text-xl';

    return (
        <div className={`${className} ${defaultTextSize} ${!lowercase && "uppercase"} font-bold text-rosa`}>
            {label}
        </div>
    )
}

export default Title;