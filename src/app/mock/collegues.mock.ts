import { Collegue } from "../models/Collegue";

export class CollegueMock{


  collegueMock:Collegue =new Collegue('aaa','lasbleis','olivier','lasbleis.olivier@yahoo.fr',new Date(),'https://www.ouest-france.fr/sites/default/files/styles/image-640x360/public/2016/10/11/29-des-francais-ne-supportent-pas-un-collegue-sale-ou-malodorant.jpg?itok=dCyuPaUH');
  listeDeCollegueMock:Collegue[]=[
    new Collegue('aaa','lasbleis','olivier','lasbleis.olivier@yahoo.fr',new Date(),'https://www.ouest-france.fr/sites/default/files/styles/image-640x360/public/2016/10/11/29-des-francais-ne-supportent-pas-un-collegue-sale-ou-malodorant.jpg?itok=dCyuPaUH'),
    new Collegue('bbb','turpin','olivier','lasbleis.olivier@yahoo.fr',new Date(),'https://www.ouest-france.fr/sites/default/files/styles/image-640x360/public/2016/10/11/29-des-francais-ne-supportent-pas-un-collegue-sale-ou-malodorant.jpg?itok=dCyuPaUH'),
    new Collegue('ddd','seguineau','kevin','lasbleis.olivier@yahoo.fr',new Date(),'https://www.ouest-france.fr/sites/default/files/styles/image-640x360/public/2016/10/11/29-des-francais-ne-supportent-pas-un-collegue-sale-ou-malodorant.jpg?itok=dCyuPaUH'),
    new Collegue('eee','kharbeche','bilel','lasbleis.olivier@yahoo.fr',new Date(),'https://clairemedium.com/wp-content/uploads/2017/12/bureau-collegue-clairemedium.jpg'),
    new Collegue('fff','lasbleis','thomas','lasbleis.olivier@yahoo.fr',new Date(),'https://cache.cosmopolitan.fr/data/photo/w1000_c17/3o/femme_bureau.jpg'),
    new Collegue('ggg','lasbleis','marine','lasbleis.olivier@yahoo.fr',new Date(),'https://media.istockphoto.com/photos/handicap-businessman-giving-highfive-to-colleague-in-office-picture-id658902000'),

  ]
}