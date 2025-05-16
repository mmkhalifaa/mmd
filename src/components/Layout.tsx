import React, { useState } from 'react';
import Header from './Header/Header';
import MeetingRecap from './MeetingRecap/MeetingRecap';
import CoachIdeas from './CoachIdeas/CoachIdeas';
import AskCoach from './AskCoach/AskCoach';
import SearchView from './Search/SearchView';
import Footer from './Footer';
import { useAppContext } from '../contexts/AppContext';

const Layout = () => {
  const { currentView } = useAppContext();
  
  return (
    <div className="min-h-screen flex flex-col bg-light-gray">
      <Header />
      
      {currentView === 'search' ? (
        <SearchView />
      ) : (
        <main className="flex-1 flex flex-col md:flex-row px-4 md:px-6 py-4 gap-4 md:gap-6 max-w-screen-2xl mx-auto w-full">
          <section className="w-full md:w-[35%]">
            <MeetingRecap />
          </section>
          
          <section className="w-full md:w-[30%]">
            <CoachIdeas />
          </section>
          
          <section className="w-full md:w-[35%]">
            <AskCoach />
          </section>
        </main>
      )}
      
      <Footer />
    </div>
  );
};

export default Layout;