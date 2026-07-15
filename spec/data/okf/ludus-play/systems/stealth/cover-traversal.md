---
type: "Ludus Gameplay System"
title: "遮蔽と潜入経路"
description: "隠れ場所、高低差、迂回路、侵入口を組み合わせる。"
tags:
  - "ludus"
  - "gameplay-system"
  - "stealth"
  - "shared-logic"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:stealth:cover-traversal"
genre_id: "genre:stealth"
implementation_status: "shared-logic"
implementation_owner: "Ergo/Ars"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

隠れ場所、高低差、迂回路、侵入口を組み合わせる。

# 設計思想

正解経路を一つに固定しない。

# 主要機能

- 遮蔽移動
- 縦方向経路
- 環境操作

# UXへの寄与

- [発見](../../ux/eff44e759df967c5.md)
- [主導権](../../ux/e3ba7ec86611ca92.md)

# ドメイン要素

- [入力と操作](../../domains/input-and-control.md)
- [空間と移動](../../domains/space-and-navigation.md)

# 汎用実装の判定

- **状態**: shared-logic
- **所有**: Ergo/Ars
- **判断**: 複数ジャンルで再利用しうるが、描画専用のPictorではなく上位のゲームロジック層が所有する。

# Pictor候補

- なし。視覚表現に分離できる要求が具体化した時点で再評価する。

# 実装上の前提

- [疑念と警戒状態](./suspicion-alert.md) の後に実装する。
