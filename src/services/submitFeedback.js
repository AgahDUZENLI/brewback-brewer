import { collection, addDoc, Timestamp } from 'firebase/firestore';
import db from './firebase';

export const submitFeedback = async (name, value) => {
  try {
    await addDoc(collection(db, 'feedbacks'), {
      name: name,
      rating: value,
      createdAt: Timestamp.now(),
    });
    console.log('✅ Feedback submitted to Firestore');
  } catch (error) {
    console.error('❌ Error submitting feedback:', error);
  }
};