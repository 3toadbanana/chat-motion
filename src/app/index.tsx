import { FlatList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Bubble } from '@/components/Bubble';
import { SenderLabel } from '@/components/SenderLabel';
import { chatHeader, messages, withGrouping } from '../data/messages';
import { colors, gap, space, typography } from '../design/theme';

// Group flags are computed in chronological order, then reversed for the inverted list.
const data = [...withGrouping(messages)].reverse();

export default function ChatScreen() {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.title}>{chatHeader.title}</Text>
        <Text style={styles.subtitle}>{chatHeader.subtitle}</Text>
      </View>

      <FlatList
        style={styles.messages}
        contentContainerStyle={styles.messagesContent}
        data={data}
        inverted
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={{
              marginTop: item.isFirstInGroup ? gap.betweenGroups : gap.inGroup,
            }}>
            {item.showSender && <SenderLabel name={item.sender} />}
            <Bubble
              text={item.text}
              side={item.side}
              isFirstInGroup={item.isFirstInGroup}
              isLastInGroup={item.isLastInGroup}
            />
          </View>
        )}
      />

      <View style={styles.inputBar}>
        <Text style={styles.placeholder}>Message</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  header: {
    backgroundColor: colors.surface,
    paddingHorizontal: space.s16,
    paddingVertical: space.s12,
  },
  title: {
    ...typography.header,
    color: colors.text,
  },
  subtitle: {
    ...typography.meta,
    color: colors.textMuted,
  },
  messages: {
    flex: 1,
  },
  messagesContent: {
    paddingHorizontal: space.s16,
    paddingVertical: space.s12,
  },
  inputBar: {
    backgroundColor: colors.surface,
    padding: space.s12,
  },
  placeholder: {
    ...typography.message,
    color: colors.textMuted,
  },
});