---
type: "Ludus Gameplay System"
title: "クエストと物語導線"
description: "主目標と寄り道を記録し、プレイヤーの順序でも物語の意味を保つ。"
tags:
  - "ludus"
  - "gameplay-system"
  - "open-world"
  - "pictor-visual"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:open-world:quest-narrative"
genre_id: "genre:open-world"
implementation_status: "pictor-visual"
implementation_owner: "Pictor"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

主目標と寄り道を記録し、プレイヤーの順序でも物語の意味を保つ。

# 設計思想

一本道に戻すのではなく、複数の行為が世界理解に寄与するようにする。

# 主要機能

- 複数クエスト
- 会話・選択条件
- 進行ログ

# UXへの寄与

- [自己決定](../../ux/38c9858546eb9d22.md)
- [継続性](../../ux/1c3a5a078e3ce5b4.md)

# ドメイン要素

- [アクターと役割](../../domains/actors.md)
- [目的と成長](../../domains/objectives-and-progression.md)
- [物語と知識](../../domains/narrative-and-knowledge.md)

# 汎用実装の判定

- **状態**: pictor-visual
- **所有**: Pictor
- **判断**: ゲーム固有の意味付けを持たない視覚表現としてPictorに集約する候補。

# Pictor候補

- [テキスト・ベクター・モーショングラフィックス](../../pictor/text-vector-motion.md)

# 実装上の前提

- [発見と地図](./discovery-map.md) の後に実装する。
