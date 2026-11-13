import { Easing } from 'react-native-reanimated';

// Starting values from motion-spec.md. Tune on a real device.

export const springs = {
    bubbleEnter: { damping: 16, stiffness: 180, mass: 1 },
    picker: { damping: 14, stiffness: 220 },
    swipeBack: { damping: 20, stiffness: 250 },
} as const;

export const timing = {
    backdropFadeMs: 150,
    floatingReactionMs: 700,
    replyStripInMs: 200,
    replyStripOutMs: 150,
    reduceMotionFadeMs: 150,
    typingStaggerMs: 120,
} as const;

export const values = {
    bubbleEnterTranslateY: 16,
    bubbleEnterScaleFrom: 0.96,
    pickerScaleFrom: 0.8,
    pressedBubbleScale: 1.04,
    floatRise: 120,
    floatDrift: 12,
    floatFadeFraction: 0.4,
    swipeMax: 64,
    swipeTrigger: 48,
    swipeResistance: 0.5,
    typingDotLift: 4,
    blurIntensity: 30,
} as const;

export const floatEasing = Easing.out(Easing.quad);