import { StyleSheet, Text } from 'react-native';

import { colors, gap, sizes, typography } from '../design/theme';

export function SenderLabel({ name }: { name: string }) {
    return <Text style={styles.label}>{name}</Text>;
}

const styles = StyleSheet.create({
    label: {
        ...typography.meta,
        color: colors.textMuted,
        // Aligns the name with the text inside the bubble, not its outer edge.
        paddingLeft: sizes.bubblePaddingX,
        marginBottom: gap.senderLabelToBubble,
    },
});