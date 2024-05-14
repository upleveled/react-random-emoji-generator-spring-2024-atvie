// completely random emoji
// choosing an emoji by name
// showing error if invalid emoji name entered
import { get, has, random } from 'node-emoji';
import { useState } from 'react';

export default function App() {
  // { name: 'house', emoji: '🏠' }
  const initialEmoji = random();
  // 1. create a state for the input
  const [emojiName, setEmojiName] = useState(initialEmoji.name);
  const [emojiIcon, setEmojiIcon] = useState(initialEmoji.emoji);

  const hasEmoji = has(emojiName);

  return (
    <>
      <h1>Random Emoji Generator</h1>
      <input
        // 2. Set the value to the input
        value={emojiName}
        onChange={(event) => {
          // set Emoji mame to input value
          setEmojiName(event.currentTarget.value);
          // get Emoji from the input value
          const foundEmojiIcon = get(event.currentTarget.value);
          // set Emoji icon to found emoji
          setEmojiIcon(foundEmojiIcon);
        }}
      />
      <button
        onClick={() => {
          const newEmoji = random();
          setEmojiIcon(newEmoji.emoji);
          setEmojiName(newEmoji.name);
        }}
      >
        Generate Random
      </button>
      <div style={{ fontSize: '100px' }}>{emojiIcon}</div>
      {/* Boolean Operator */}
      {!hasEmoji && (
        <div style={{ backgroundColor: 'red', marginTop: '5px' }}>
          This emoji doesn't exist
        </div>
      )}
      {/* Ternary Operator
      {hasEmoji ? (
        <div style={{ fontSize: '100px' }}>{emojiIcon}</div>
      ) : (
        <div style={{ backgroundColor: 'red', marginTop: '5px' }}>
          This emoji doesn't exist
        </div>
      )} */}
    </>
  );
}
