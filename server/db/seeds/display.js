/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('display').del()
  await knex('display').insert([
    {
      id: 1,
      school: 'Dev Academy',
      group: 'Group Project',
      complete: 'Complete',
      title: 'ESC',
      description:
        'A virtual escape room that tracks your time through a series of puzzles and mini games',
      github: 'https://github.com/lauren-lancaster/Esc',
      url: '',
      created_at: '2023',
      tech: 'Typescript, Javascript, React, Redux, SQLite3, Knex',
      full_description:
        "For the Dev Academy final group projects, I pitched the idea of making an escape room. I chose it because I was excited about applying the skills I'd learned throughout boot camp in a creative and fun way. I worked in a group of five to achieve this project. Together we planned out five puzzle rooms that the player must work through. If the player is successful they will also have their time updated to the scoreboard. We spent a day in the planning and documentation stage, working out all of our features, data, routes, database functions, and wireframes in advance. We also set up a kanban board that we used throughout the week and wrote up a daily schedule and sprint goals that we referred to every day. Within our group I had the role of co-scrum lead, which meant I was responsible for the schedule, the sprint goals, and guiding our stand up meetings. By the end of the project we had met all of our product goals and had created an immersive virtual escape room experience.",
      reflections:
        'This was a really valuable learning experience that I got a lot out of. Tech wise, it helped to solidify all of the knowledge I had been learning for the past few weeks. I also learned how to use a sound library in React, and how to Route all my pages using react-router-dom. I also discovered the value of a thorough planning session. In the past I have been the type to right up the start of a plan, then wing the rest. Having the whole project planned and documented right from the get-go significantly sped up my workflow as I always new which tasks needed to be worked on and when. There was also much less time spent on decision making. /n At the end of the week we spent a day preparing to present our projects to an audience. For the speech, I had to adapt the way I talked about the project and the product to a non-technical audience.',
    },
    {
      id: 2,
      school: 'Dev Academy',
      group: 'Solo Project',
      complete: 'In Progress',
      title: 'Reading Tracker',
      description:
        'An app where you can list and review the books you have read',
      github: 'https://github.com/lauren-lancaster/my-fullstack-collection',
      url: 'http://lauren-book-collection.devacademy.nz/',
      created_at: '2023',
      tech: 'Typescript, Javascript, React, Redux, SQLite3, Knex, SCSS',
      full_description:
        'This is a website that allows you to view information on books you have read, as well as your rating and review of them. You can also add, update and delete the books. This project is still in progress. In future users will be able to click on the individual book cards and be taken to a new webpage with more detailed information. I also want to add authentication so users can log in to add their own books.',
      reflections:
        "The reading tracker was my second solo project at Dev Academy. Most work at Dev is done in pairs. At this stage in my learning I had been working in fullstack for less than a week, so this project was a way for me to teach myself how to connect the back end to the front end. Working on such new content individually was a challenge, especially because I fell sick this week and had to switch to working from home, however during the foundations part of Dev Academy I had built some strong working habits for working at home so the switch back wasn't too difficult. I wrote down my thoughts and reflections as I went and stayed in regular contact with the Dev Academy facilitators. Because I was working by myself all the areas of new knowledge I hadn't quite cemented became very obvious and I was able to quickly identify which areas needed a bit of deeper learning. The project was slow going, hence why it is yet to be completed, but I had a lot of fun learning new things throughout it and future projects were much easier because I had spent the time on it first.",
    },
    {
      id: 3,
      school: 'VUW Sonic Arts',
      group: 'Solo Project',
      complete: 'Complete',
      title: 'Effects Controller',
      description:
        'The design and prototype for a French horn effects controller',
      github: 'https://github.com/lauren-lancaster/Electronic-Horn',
      url: '',
      created_at: '2022',
      tech: 'C++, arduino, teensyduino, Fusion360',
      full_description:
        "As the major assignment for my CMPO402 paper I was invited to create any kind of audio device using a micro-controller. After searching the NIME archives for inspiration, I discovered that an effects controller, while being popular with other instruments, had yet to be designed and built for my instrument, the French Horn. I drew up some sketches for how this might look for the horn, taking the ergonomics of playing the instrument into consideration. I wanted to create a controller that could be used instinctively by the player so there was as little a learning curve as possible. I decided on attaching buttons around the keys of the horn to trigger effects, and placing force pressure sensors inside the bell of the instrument where the right hand sits to adjust effect parameters. I also drew up a circuit diagram for my teensyduino, and wrote my own code to program it. With the planning in place I finalised my code, connected it to the effects in the digital audio workstation I'd be using, built and soldered my circuit, and 3D printed the parts I'd need to attach the sensors and circuitry to my instrument.",
      reflections:
        'If I were to recreate this project again in future I would like to smooth out my parameter adjustments. When a button on the handgrip is pressed (say the one for reverb), the effect will read the values it’s receiving from the pressure sensors. When that button is switched off the effect will hold the last read value from when the button was on. The problem arises when the button is pressed on again. The parameters will instantly switch to the new value being read by the sensors. I would prefer a slower and smoother transition to the new value. I would also make my mounting component on the handgrip smaller, and if possible, find smaller buttons as well. I believe smaller buttons will make holding the horn and controlling the keys much easier for the horn player, and would increase the fluidity with which they can play the instrument. My last adjustment would be to experiment with DAWs outside of Ableton. If someone were to repeat this experiment and use more components that required MIDI mapping, I would definitely recommend looking for options outside of Ableton that allow multiple components to be mapped at a time.',
    },
    {
      id: 4,
      school: 'VUW Sonic Arts',
      group: 'Solo Project',
      complete: 'Complete',
      title: 'Audio Visualiser',
      description:
        'An audio visualiser that can record, save, and playback sound',
      github: 'https://github.com/lauren-lancaster/p5js-CMPO385',
      url: 'https://editor.p5js.org/LaurenL737/full/QlV8P7b3-m',
      created_at: '2021',
      tech: 'P5JS',
      full_description:
        "This project was the major assignment for my CMPO385 paper. For this course I learned to create audio visualisers using the p5js sound library, which is a Javascript library for creative coding. This product is an audio recorder and playback device. When the user clicks the page, recording will start. The code will monitor the volume of the sound input and give visual feedback on these levels to the user (a small green circle is quiet, a large red circle is loud). The recording will stop on the next click. On the third click the sound will save to your computer and playback of the audio will begin. I make use of FFT (fast fourier transform: transforms signals from the time domain to the frequency domain) to create visuals from the sound being played back. For better visuals, I'd reccommend recording louder createTextSpanFromBounds.",
      reflections:
        'This was my first time venturing into Javascript, so much of my code from this paper was learned from online tutorials. Even though my code lacked originality, I was completely inspired by the possibilities of what could be achieved. This paper is where I discovered my love of code and what I consider to be the start of my journey into the tech world.',
    },
  ])
}
