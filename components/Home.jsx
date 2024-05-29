import Image from 'next/image';
import Chatbot from '../public/assets/Advantages-of-adding-chatbot-for-website-@2x-Copy-1.png';

export const Home  = () => {
  return (
    <>
      <div className={'flex'}>
        <div className="content">
          <h1>Chatbots for your mobile applications</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.</p>
          <div className="buttons">
            <button className="details-button">More details</button>
            <button className="demo-button">View demo</button>
          </div>
        </div>
        <div className="image-container w-1/2 h-[400px] flex justify-center items-center rounded-md">
          <Image src={Chatbot} alt="Chatbot illustration" layout={'fill'} fill={true} className="rounded-md" />
        </div>
      </div>
      <div className="ielts-container">
        <h2>Enhance Your IELTS Speaking and Writing with Chatbots</h2>
        <p>Our advanced chatbot technology helps you practice speaking and writing for IELTS with instant feedback
          and interactive sessions. Improve your fluency, coherence, and writing skills by engaging in realistic
          conversations and receiving detailed writing corrections.</p>
        <div className="features">
          <div className="feature-item">
            <h3>Speaking Practice</h3>
            <p>Engage in real-time conversations with our chatbot to enhance your speaking fluency and
              pronunciation.</p>
          </div>
          <div className="feature-item">
            <h3>Writing Feedback</h3>
            <p>Receive immediate feedback on your writing tasks, focusing on grammar, coherence, and task
              response.</p>
          </div>
        </div>
      </div>
    </>
  );
};
