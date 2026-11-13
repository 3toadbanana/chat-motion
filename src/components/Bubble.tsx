import { StyleSheet, Text, View, type ViewStyle } from 'react-native';

import { colors, radii, sizes, typography } from '@/design/theme';

type Props = {
    text: string;
    side: 'received' | 'sent';
    isFirstInGroup: boolean;
    isLastInGroup: boolean;
};

export function Bubble({ text, side, isFirstInGroup, isLastInGroup }: Props) {
    const sent = side === 'sent';

    // Corners on the sender's side: 6 where it touches a neighbouring bubble,
    // 2 on the tail (last bubble in a group). All other corners stay at 20.
    const top = isFirstInGroup ? radii.bubble : radii.bubbleStacked;
    const bottom = isLastInGroup ? radii.bubbleTail : radii.bubbleStacked;

    const corners: ViewStyle = sent
        ? { borderTopRightRadius: top, borderBottomRightRadius: bottom }
        : { borderTopLeftRadius: top, borderBottomLeftRadius: bottom };

    return (
        <View
            style={[
                styles.bubble,
                sent ? styles.sent : styles.received,
                corners,
            ]}>
            <Text style={[styles.text, { color: sent ? colors.onAccent : colors.text }]}>
                {text}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    bubble: {
        maxWidth: sizes.bubbleMaxWidth,
        paddingHorizontal: sizes.bubblePaddingX,
        paddingVertical: sizes.bubblePaddingY,
        borderRadius: radii.bubble,
    },
    received: {
        alignSelf: 'flex-start',
        backgroundColor: colors.surfaceRaised,
    },
    sent: {
        alignSelf: 'flex-end',
        backgroundColor: colors.accent,
    },
    text: {
        ...typography.message,
    },
});