import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

import { colors, radii, sizes, space, typography } from '../design/theme';

export function InputBar() {
    return (
        <View style={styles.bar}>
            <View style={styles.pill}>
                <TextInput
                    style={styles.input}
                    placeholder="Message"
                    placeholderTextColor={colors.textMuted}
                    selectionColor={colors.accentBright}
                />
            </View>
            <Pressable
                accessibilityLabel="Send"
                style={({ pressed }) => [styles.send, pressed && styles.pressed]}>
                <Text style={styles.sendIcon}>↑</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    bar: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: space.s8,
        backgroundColor: colors.surface,
        padding: space.s12,
    },
    pill: {
        flex: 1,
        height: sizes.inputBarHeight,
        justifyContent: 'center',
        paddingHorizontal: space.s16,
        borderRadius: radii.pill,
        backgroundColor: colors.surfaceRaised,
    },
    input: {
        ...typography.message,
        color: colors.text,
        padding: 0,
        includeFontPadding: false,
    },
    send: {
        width: sizes.sendButton,
        height: sizes.sendButton,
        borderRadius: sizes.sendButton / 2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.accentBright,
    },
    sendIcon: {
        color: colors.onAccent,
        fontSize: 20,
        lineHeight: 22,
        fontWeight: '600',
    },
    pressed: {
        opacity: 0.7,
    },
});