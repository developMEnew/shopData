import 'package:cloud_firestore/cloud_firestore.dart';
import '../models/shop_item.dart';

class ShopService {
  final CollectionReference _itemsCollection = 
      FirebaseFirestore.instance.collection('shopItems');

  Future<String> addItem(ShopItem item) async {
    try {
      final docRef = await _itemsCollection.add(item.toMap());
      return docRef.id;
    } catch (e) {
      throw Exception('Failed to add item: $e');
    }
  }

  Stream<List<ShopItem>> getItems() {
    return _itemsCollection
        .orderBy('name')
        .snapshots()
        .map((snapshot) => snapshot.docs
            .map((doc) => ShopItem.fromMap(doc.id, doc.data() as Map<String, dynamic>))
            .toList());
  }
}