import type { TextStyle } from 'react-native';

// Token names mirror the Figma variables (camelCased). Change colors here only.
export const colors = {
    bg: '#09120D',
    surface: '#0F1C15',
    surfaceRaised: '#16271E',
    hairline: '#21362B',
    text: '#EEF3EF',
    textMuted: '#8CA597',
    accent: '#1F6B45',
    onAccent: '#F2F5F3',
    accentBright: '#2E9B62',
    accentSoft: 'rgba(31, 107, 69, 0.24)',
} as const;

export const space = {
    s2: 2,
    s4: 4,
    s8: 8,
    s12: 12,
    s16: 16,
    s24: 24,
} as const;

export const gap = {
    inGroup: 2,
    betweenGroups: 12,
    senderLabelToBubble: 4,
} as const;

export const radii = {
    bubble: 16,
    bubbleStacked: 16,
    bubbleTail: 6,
    pill: 24,
    card: 12,
} as const;

export const sizes = {
    inputBarHeight: 48,
    sendButton: 36,
    avatar: 36,
    bubbleMaxWidth: '78%',
    bubblePaddingX: 12,
    bubblePaddingY: 8,
    safeAreaBottomFallback: 34,
} as const;

export const typography: Record<'message' | 'header' | 'meta', TextStyle> = {
    message: { fontSize: 16, lineHeight: 22, fontWeight: '400' },
    header: { fontSize: 17, lineHeight: 22, fontWeight: '600' },
    meta: { fontSize: 12, lineHeight: 16, fontWeight: '400' },
};