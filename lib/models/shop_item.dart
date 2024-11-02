class ShopItem {
  final String? id;
  final String name;
  final double costPrice;
  final double sellingPrice;
  final String description;
  final String imageUrl;

  ShopItem({
    this.id,
    required this.name,
    required this.costPrice,
    required this.sellingPrice,
    required this.description,
    required this.imageUrl,
  });

  Map<String, dynamic> toMap() {
    return {
      'name': name,
      'costPrice': costPrice,
      'sellingPrice': sellingPrice,
      'description': description,
      'imageUrl': imageUrl,
    };
  }

  factory ShopItem.fromMap(String id, Map<String, dynamic> map) {
    return ShopItem(
      id: id,
      name: map['name'] ?? '',
      costPrice: (map['costPrice'] ?? 0).toDouble(),
      sellingPrice: (map['sellingPrice'] ?? 0).toDouble(),
      description: map['description'] ?? '',
      imageUrl: map['imageUrl'] ?? '',
    );
  }
}