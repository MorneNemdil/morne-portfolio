import { useEffect, useState } from 'react'
import { useTheme } from './theme-provider';

export type TypeWriterSegmentProps = { text: string, colourClass: string }

const TypewriterText = ({ staticText, textSegments, className }: { staticText: string, textSegments: TypeWriterSegmentProps[], className?: string }) => {
    const [currentAnimatedSegmentIndex, setCurrentAnimatedSegmentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            // Increment the index, and loop back to the beginning if it exceeds the array length
            setCurrentAnimatedSegmentIndex((prevIndex) =>
                (prevIndex + 1) % textSegments.length
            );
        }, 2000); // 2-second delay between each animated word

        // Cleanup function: Clear the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, [textSegments.length]);

    return (
        <div className={className}>
            <span className="text-4xl sm:text-3xl lg:text-4xl font-semibold leading-tight tracking-wide">
                {/* Render the static text in white */}
                <span>{staticText}</span>
                {/* Render the TypewriterEffect component for the currently selected animated segment */}
                <TypewriterEffect
                    segment={textSegments[currentAnimatedSegmentIndex]} // Pass only the current segment
                    speed={100} // Typing speed for characters within the segment
                />
            </span>
        </div>
    );
}

const TypewriterEffect = ({ segment, speed = 100 }: { segment: TypeWriterSegmentProps, speed: number }) => {
    const { theme } = useTheme();
    // State to store the array of displayed characters, where each character carries its associated color class.
    const [displayedChars, setDisplayedChars] = useState<any>([]);
    // State to track the index of the current character within the current segment.
    const [currentCharIndexInSegment, setCurrentCharIndexInSegment] = useState(0);

    // Effect to reset the component's state whenever a new 'segment' prop is received.
    // This ensures the typewriter effect restarts cleanly for each new word.
    useEffect(() => {
        setDisplayedChars([]); // Clear previously displayed characters
        setCurrentCharIndexInSegment(0); // Reset character index to start from the beginning of the new segment
    }, [segment]); // Dependency array: effect runs when 'segment' prop changes

    // Effect to manage the actual typing animation.
    useEffect(() => {
        // If there's no segment or all characters in the current segment have been typed, stop.
        if (!segment || currentCharIndexInSegment >= segment.text.length) {
            return;
        }

        // Set a timeout to append the next character to the displayed text.
        const timeoutId = setTimeout(() => {
            setDisplayedChars((prev: any) => [
                ...prev,
                {
                    char: segment.text.charAt(currentCharIndexInSegment), // Get the next character
                    colourClass: segment.colourClass, // Get its corresponding color class
                },
            ]);
            setCurrentCharIndexInSegment((prev) => prev + 1); // Advance to the next character in the segment
        }, speed); // The delay before typing the next character

        // Cleanup function: Clear the timeout if the component unmounts or dependencies change,
        // to prevent memory leaks and ensure smooth transitions.
        return () => clearTimeout(timeoutId);
    }, [currentCharIndexInSegment, segment, speed]); // Dependencies: effect runs when these states/props change

    return (
        <>
            {/* Map through the array of displayed characters and render each one in its specified color. */}
            {displayedChars.map((item: any, i: number) => (
                <span key={i} className={item.colourClass}>
                    {item.char}
                </span>
            ))}
            {/* Blinking cursor element. */}
            {/* It's a thin, white vertical bar, sized relative to the text using 'em' units, */}
            {/* and vertically aligned to the middle of the text. */}
            {/* The cursor only shows if there's an active segment to type or just finished typing. */}
            {segment && (
                <span
                    className={`typewriter-cursor w-[0.16em] h-[0.8em] mb-2 inline-block ml-2 animate-blink-cursor ${theme == "light" ? "bg-black" : "bg-white"}`}
                    style={{ verticalAlign: 'middle' }}
                ></span>
            )}
        </>
    );
};

// Dynamically inject CSS keyframes for the blinking cursor animation into the document's <head>.
// This ensures the animation is globally available and can be applied via Tailwind's 'animate-blink-cursor' class.
const style = document.createElement('style');
style.innerHTML = `
  @keyframes blink-cursor {
    0%, 100% { opacity: 1; } /* Cursor fully visible */
    50% { opacity: 0; }    /* Cursor fully transparent */
  }
  .animate-blink-cursor {
    animation: blink-cursor 1s step-end infinite; /* Applies the blink animation with a 0.7s cycle, stepping at the end, and repeating indefinitely. */
  }
`;
document.head.appendChild(style);

export default TypewriterText