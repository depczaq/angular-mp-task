import { Injectable } from '@angular/core';
import { Course } from './course';
import { BasicCourse } from './basic-course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  constructor() { }

  public getCoursesList(): Course[] {
    const c1: Course = new BasicCourse(1, "Video course 1", new Date(2018, 0, 1), 25,
      "Come and see the violence inherent in the system. Help! Help! I'm being repressed!"
      + " Oh, king eh? Very nice. And how'd you get that, eh? By exploiting the workers."
      + " By hanging on to outdated imperialist dogma which perpetuates the economic and "
      + "social differences in our society.");

    const c2: Course = new BasicCourse(2, "Video course 2", new Date(2018, 9, 23), 12,
      "Hegel is arguing that the reality is merely an a priori adjunct of non-naturalistic "
      + " ethics, Kant via the categorical imperative is holding that ontologically it "
      + " exists only in the imagination, and Marx claims it was offside. Not necessarily. "
      + " I could be arguing in my spare time.");

    const c3: Course = new BasicCourse(3, "Video course 3", new Date(2018, 1, 2), 67,
      "Nobody expects the Spanish Inquisition! Stwike him, Centuwion! Stwike him vewy"
      + "  wuffly! I'm Brian, and so's my wife!");

    const c4: Course = new BasicCourse(4, "Video course 4", new Date(2018, 3, 11), 84,
      "We interrupt this program to annoy you and make things generally irritating. "
      + " I object to all this sex on the television. I mean, I keep falling off!");

    const c5: Course = new BasicCourse(5, "Video course 5", new Date(2018, 8, 30), 22,
      "And Dinsdale says 'I hear you've been a naughty boy, Clement', and he splits "
      + " me nostrils open, saws me leg off and pulls me liver out. And I tell him "
      + " 'My name's not Clement', and then he loses his temper and nails my head to "
      + " the floor.");

    const c6: Course = new BasicCourse(6, "Video course 6", new Date(2018, 11, 17), 19,
      "It's a Mr. Death, dear. He's here about the reaping. I'm not a roman mum, "
      + " I'm a kike, a yid, a heebie, a hook-nose, I'm kosher mum, I'm a Red Sea "
      + " pedestrian, and proud of it! Is your wife a goer, eh? Know what I mean? "
      + " Know what I mean? Nudge, nudge! Know what I mean? Say no more!");

    const c7: Course = new BasicCourse(7, "Video course 7", new Date(2018, 3, 5), 78,
      "Hey! Your nose is going to be three foot wide across your face by the time "
      + " I'm finished with you!");

    const c8: Course = new BasicCourse(8, "Video course 8", new Date(2018, 5, 10), 50,
      "That's what being a Protestant's all about. That's why it's the church for me."
      + "  That's why it's the church for anyone who respects the individual and the "
      + " individual's right to decide for him or herself. When Martin Luther nailed "
      + " his protest up to the church door in fifteen-seventeen, he may not have "
      + " realised the full significance of what he was doing, but four hundred years"
      + "  later, thanks to him, my dear, I can wear whatever I want on my "
      + " John Thomas...");

    return [c1, c2, c3, c4, c5, c6, c7, c8];
  }
}
