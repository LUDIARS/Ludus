---
type: "Ludus Game Genre"
title: "タワーディフェンス"
description: "タワーディフェンスは、限られたリソースで防衛施設を配置し、敵の侵入を阻止するジャンル。配置戦略、アップグレード判断、ウェーブ管理が勝敗を分ける。"
tags:
  - "ludus"
  - "gameplay"
  - "genre"
  - "tower-defense"
timestamp: "2026-07-15T00:00:00+09:00"
source_import_id: "src_0001"
source_page_id: "30453028-8e8d-809d-b4cd-ffe21704e5fc"
source_graph: "graph/tower-defense.json"
---

# コア体験

タワーディフェンスは、限られたリソースで防衛施設を配置し、敵の侵入を阻止するジャンル。配置戦略、アップグレード判断、ウェーブ管理が勝敗を分ける。

# 主要システム

- [タワー配置/建設システム](../systems/tower-defense/s01.md)
- [タワータイプ/特性システム](../systems/tower-defense/s02.md)
- [アップグレード/強化システム](../systems/tower-defense/s03.md)
- [ウェーブ/敵出現システム](../systems/tower-defense/s04.md)
- [経路/パスシステム](../systems/tower-defense/s05.md)
- [リソース/経済システム](../systems/tower-defense/s06.md)
- [ライフ/耐久システム](../systems/tower-defense/s07.md)
- [特殊能力/スキルシステム](../systems/tower-defense/s08.md)

# 実装順序

1. 基本配置システム: タワーの設置
2. 敵の経路移動: パス沿いの移動
3. タワー攻撃: 射程内の敵への攻撃
4. ウェーブシステム: 段階的な敵出現
5. リソース管理: 資金の獲得と消費
6. アップグレードシステム: タワー強化
7. タワータイプ多様化: 複数種類の追加
8. 特殊能力: プレイヤースキル(オプション)
