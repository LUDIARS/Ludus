---
type: "Ludus Gameplay System"
title: "収集物とスコア"
description: "安全な経路から少し外れた収集物に報酬を与え、走行中の選択を増やす。"
tags:
  - "ludus"
  - "gameplay-system"
  - "runner"
  - "split"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:runner:pickup-score"
genre_id: "genre:runner"
implementation_status: "split"
implementation_owner: "Ergo/Ars + Pictor"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

安全な経路から少し外れた収集物に報酬を与え、走行中の選択を増やす。

# 設計思想

最短経路だけが最適にならないようにする。

# 主要機能

- 収集ライン
- 距離スコア
- 連続取得報酬

# UXへの寄与

- [リスク選択](../../ux/3189d605706334cc.md)
- [達成感](../../ux/0bba7c376aacad35.md)

# ドメイン要素

- [空間と移動](../../domains/space-and-navigation.md)
- [目的と成長](../../domains/objectives-and-progression.md)
- [情報とUI](../../domains/information-and-ui.md)
- [メタゲームと運用](../../domains/meta-and-live-operations.md)

# 汎用実装の判定

- **状態**: split
- **所有**: Ergo/Ars + Pictor
- **判断**: ゲーム規則はErgo/Ars、再利用可能な視覚出力はPictorへ分離する候補。

# Pictor候補

- [テキスト・ベクター・モーショングラフィックス](../../pictor/text-vector-motion.md)

# 実装上の前提

- [障害物とタイミング判定](./obstacle-timing.md) の後に実装する。
