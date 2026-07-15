---
type: "Ludus Game Genre"
title: "プラットフォーマー"
description: "ジャンプと着地を中心とした空間移動の精密性を問うジャンル。物理演算と入力処理の調整がゲーム全体の品質を決定づける。"
tags:
  - "ludus"
  - "gameplay"
  - "genre"
  - "platformer"
timestamp: "2026-07-15T00:00:00+09:00"
source_import_id: "src_0001"
source_page_id: "30453028-8e8d-800d-bb95-f394d5764783"
source_graph: "graph/platformer.json"
---

# コア体験

ジャンプと着地を中心とした空間移動の精密性を問うジャンル。物理演算と入力処理の調整がゲーム全体の品質を決定づける。

# 主要システム

- [ジャンプメカニクス](../systems/platformer/jump-mechanics.md)
- [コヨーテタイム (Coyote Time)](../systems/platformer/coyote-time.md)
- [ジャンプバッファリング (Jump Buffering)](../systems/platformer/jump-buffering.md)
- [壁ジャンプ/壁張り付き](../systems/platformer/wall-jump.md)
- [グラウンドポンド (Ground Pound)/下突き](../systems/platformer/ground-pound.md)
- [移動速度の段階化](../systems/platformer/movement-speed.md)
- [エッジハング/レッジグラブ (Ledge Grab)](../systems/platformer/ledge-grab.md)
- [スライディング/ダッシュ](../systems/platformer/slide-dash.md)

# 実装順序

1. 基本ジャンプメカニクス
2. コヨーテタイム + ジャンプバッファリング
3. 移動速度の段階化
4. 二段ジャンプ
5. 壁ジャンプ
6. レッジグラブ
7. グラウンドポンド
8. ダッシュ/スライディング (オプション)
