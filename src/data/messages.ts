export type Message = {
    id: string;
    sender: string;
    side: 'received' | 'sent';
    text: string;
};

export type GroupedMessage = Message & {
    isFirstInGroup: boolean;
    isLastInGroup: boolean;
    showSender: boolean;
};

export const chatHeader = {
    title: 'Poker Night 🃏',
    subtitle: '4 online',
};

// Chronological order (oldest first).
export const messages: Message[] = [
    { id: '1', sender: 'Maya', side: 'received', text: "who's in for friday?" },
    { id: '2', sender: 'Maya', side: 'received', text: "I'm bringing snacks this time" },
    { id: '3', sender: 'You', side: 'sent', text: 'Count me in' },
    { id: '4', sender: 'You', side: 'sent', text: 'Can we start at 8 instead of 9?' },
    { id: '5', sender: 'You', side: 'sent', text: 'I have an early morning' },
    { id: '6', sender: 'Soren', side: 'received', text: '8 works for me' },
    {
        id: '7',
        sender: 'Soren',
        side: 'received',
        text: 'but only if Maya doesn\u2019t "accidentally" hide the good chips again',
    },
    { id: '8', sender: 'Maya', side: 'received', text: 'that was ONE time' },
    { id: '9', sender: 'You', side: 'sent', text: "Honestly I'm still not over it" },
];

// Computes group flags from consecutive senders, so the data stays simple.
export function withGrouping(list: Message[]): GroupedMessage[] {
    return list.map((m, i) => {
        const prev = list[i - 1];
        const next = list[i + 1];
        const isFirstInGroup = !prev || prev.sender !== m.sender;
        const isLastInGroup = !next || next.sender !== m.sender;
        return {
            ...m,
            isFirstInGroup,
            isLastInGroup,
            showSender: isFirstInGroup && m.side === 'received',
        };
    });
}