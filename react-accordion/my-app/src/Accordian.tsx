import { Topics } from './App';
import './Accordian.css';
import { useState } from 'react';

type AccordianProps = {
  topics: Topics[];
};

export function Accordian({ topics }: AccordianProps) {
  const [isOpen, setIsOpen] = useState<Topics>();

  function handleClick(item: Topics): void {
    if (item === isOpen) {
      setIsOpen(undefined);
    } else {
      setIsOpen(item);
    }
  }

  const topicCardElements = topics.map((item) => {
    return (
      <TopicCard
        key={item.id}
        topic={item}
        onClick={() => handleClick(item)}
        isOpen={item === isOpen}
      />
    );
  });
  return <>{topicCardElements}</>;
}

type TopicCardProps = {
  topic: Topics;
  isOpen: boolean;
  onClick: () => void;
};

function TopicCard({ topic, isOpen, onClick }: TopicCardProps) {
  return (
    <div>
      <div className="topic" onClick={onClick}>
        <h3>"{topic.title}"</h3>
      </div>
      {isOpen ? (
        <div className="description">
          <p>{topic.content}</p>
        </div>
      ) : undefined}
    </div>
  );
}
