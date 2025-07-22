import { inject, Injectable } from '@angular/core';
import {
  Database,
  ref,
  set,
  get,
  child,
  update,
  increment,
} from '@angular/fire/database';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(private db = inject(Database)) {}

  // Increment view count
  incrementViewCount() {
    const viewCountRef = ref(this.db, 'portfolioViews/count');
    update(viewCountRef, { '.sv': 'increment' });
  }

  // Or explicitly increment using get/set
  async increaseViewCount() {
    const viewCountRef = ref(this.db, 'portfolioViews/count');
    const snapshot = await get(viewCountRef);

    if (snapshot.exists()) {
      const currentCount = snapshot.val();
      set(viewCountRef, currentCount + 1);
    } else {
      set(viewCountRef, 1);
    }
  }

  // Read the current view count
  async getViewCount(): Promise<number> {
    const snapshot = await get(ref(this.db, 'portfolioViews/count'));
    return snapshot.exists() ? snapshot.val() : 0;
  }
}
