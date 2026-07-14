---
type: "Ludus Game Genre"
title: "MOBA (Multiplayer Online Battle Arena)"
description: "MOBAは、チーム対戦と戦略的な成長を核とするジャンル。レーン戦、ファーム、集団戦、オブジェクト管理が複雑に絡み合い、高度なチームワークを要求する。"
tags:
  - "ludus"
  - "gameplay"
  - "genre"
  - "moba"
timestamp: "2026-07-15T00:00:00+09:00"
source_import_id: "src_0001"
source_page_id: "30453028-8e8d-8053-b4ff-c983a8d9a373"
source_graph: "graph/moba.json"
---

# コア体験

MOBAは、チーム対戦と戦略的な成長を核とするジャンル。レーン戦、ファーム、集団戦、オブジェクト管理が複雑に絡み合い、高度なチームワークを要求する。

# 主要システム

- [ヒーロー/チャンピオンシステム](../systems/moba/s01.md)
- [レーン/マップ構造](../systems/moba/s02.md)
- [ラストヒット/ファーミング](../systems/moba/s03.md)
- [アイテムビルド/装備システム](../systems/moba/s04.md)
- [レベルアップ/スキル習得](../systems/moba/s05.md)
- [ジャングル/中立モンスター](../systems/moba/s06.md)
- [集団戦/チームファイト](../systems/moba/s07.md)
- [プッシュ/オブジェクト破壊](../systems/moba/s08.md)

# 実装順序

1. マップ構造: 3レーンと拠点配置
2. ヒーロー基本操作: 移動と攻撃
3. スキルシステム: 特殊能力の実装
4. ミニオン/ウェーブ: 自動生成と移動
5. ラストヒット/経済: ゴールド獲得
6. レベルアップ: 経験値と成長
7. アイテムショップ: 装備購入
8. チーム対戦/勝利条件: 5vs5とネクサス破壊
