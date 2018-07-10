import { Injectable } from '@angular/core';
import { BasicCourse } from 'app/courses/basic-course';
import { Course } from 'app/courses/course.model';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  constructor() { }

  public getCoursesList(): Course[] {
    const c1: Course = new BasicCourse({
      id: 1,
      title: "Video course 1",
      creationDate: new Date(2018, 0, 1),
      duration: 25,
      description: "Come and see the violence inherent in the system. Help! Help! I'm being repressed!"
        + " Oh, king eh? Very nice. And how'd you get that, eh? By exploiting the workers."
        + " By hanging on to outdated imperialist dogma which perpetuates the economic and "
        + "social differences in our society."
    });

    const c2: Course = new BasicCourse({
      id: 2,
      title: "Video course 2",
      creationDate: new Date(2018, 9, 23),
      duration: 12,
      description: "Hegel is arguing that the reality is merely an a priori adjunct of non-naturalistic "
        + " ethics, Kant via the categorical imperative is holding that ontologically it "
        + " exists only in the imagination, and Marx claims it was offside. Not necessarily. "
        + " I could be arguing in my spare time.",
      topRated: true
    });

    const c3: Course = new BasicCourse({
      id: 3,
      title: "Video course 3",
      creationDate: new Date(2018, 1, 2),
      duration: 67,
      description: "Nobody expects the Spanish Inquisition! Stwike him, Centuwion! Stwike him vewy"
        + "  wuffly! I'm Brian, and so's my wife!"
    });

    const c4: Course = new BasicCourse({
      id: 4,
      title: "Video course 4",
      creationDate: new Date(2018, 3, 11),
      duration: 84,
      description: "We interrupt this program to annoy you and make things generally irritating. "
        + " I object to all this sex on the television. I mean, I keep falling off!",
      topRated: true
    });

    const c5: Course = new BasicCourse({
      id: 5,
      title: "Video course 5",
      creationDate: new Date(2018, 8, 30),
      duration: 22,
      description: "And Dinsdale says 'I hear you've been a naughty boy, Clement', and he splits "
        + " me nostrils open, saws me leg off and pulls me liver out. And I tell him "
        + " 'My name's not Clement', and then he loses his temper and nails my head to "
        + " the floor."
    });

    const c6: Course = new BasicCourse({
      id: 6,
      title: "Video course 6",
      creationDate: new Date(2018, 11, 17),
      duration: 19,
      description: "It's a Mr. Death, dear. He's here about the reaping. I'm not a roman mum, "
        + " I'm a kike, a yid, a heebie, a hook-nose, I'm kosher mum, I'm a Red Sea "
        + " pedestrian, and proud of it! Is your wife a goer, eh? Know what I mean? "
        + " Know what I mean? Nudge, nudge! Know what I mean? Say no more!"
    });

    const c7: Course = new BasicCourse({
      id: 7,
      title: "Video course 7",
      creationDate: new Date(2018, 3, 5),
      duration: 78,
      description: "Hey! Your nose is going to be three foot wide across your face by the time "
        + " I'm finished with you!"
    });

    const c8: Course = new BasicCourse({
      id: 8,
      title: "Video course 8",
      creationDate: new Date(2018, 5, 10),
      duration: 50,
      description: "That's what being a Protestant's all about. That's why it's the church for me."
        + "  That's why it's the church for anyone who respects the individual and the "
        + " individual's right to decide for him or herself. When Martin Luther nailed "
        + " his protest up to the church door in fifteen-seventeen, he may not have "
        + " realised the full significance of what he was doing, but four hundred years"
        + "  later, thanks to him, my dear, I can wear whatever I want on my "
        + " John Thomas...",
      topRated: true
    });

    return [c1, c2, c3, c4, c5, c6, c7, c8];
  }
}
