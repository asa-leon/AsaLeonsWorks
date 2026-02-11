import { motion, Variants } from 'framer-motion'

interface TypingTextProps {
    text: string;
    className?: string;
}

export const TypingText = ({ text, className }: TypingTextProps) => {
    // spliit text into individual letters as array
    const letters = Array.from(text)

    // animation settings for container
    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { 
                staggerChildren: 0.05, 
                delayChildren: 0.02 * i },
        }),
    }
    
    // animation settings for individual letters
    const child: Variants = {
        visible: {
            opacity: 1,
            display: 'inline',
            transition: {
                duration: 0,
                type: 'tween',
                ease: 'linear'
            },
        },
        hidden: {
            opacity: 0,
            display: 'none',
        },
    }
    
    return (
        <motion.div
            style={{ display: 'inline'}}
            variants={container}
            initial='hidden'
            animate='visible'
            key={text} // re-animate when text changes
            className={className}
        >
            {letters.map((letter, index) => (
                <motion.span variants={child} key={index}>
                    {letter}
                </motion.span>
            ))}
        </motion.div>
    )
}

