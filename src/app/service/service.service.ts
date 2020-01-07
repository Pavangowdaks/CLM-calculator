import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(
    private firestore: AngularFirestore,
  ) { }

  public create_record(record) {
    return this.firestore.collection('collections').add(record);
  }

}
