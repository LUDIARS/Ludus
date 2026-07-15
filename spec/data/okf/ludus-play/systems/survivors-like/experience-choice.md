---
type: "Ludus Gameplay System"
title: "経験値とレベルアップ選択"
description: "経験値取得と複数候補の提示により、試行ごとに異なる成長方針を作る。"
tags:
  - "ludus"
  - "gameplay-system"
  - "survivors-like"
  - "pictor-visual"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:survivors-like:experience-choice"
genre_id: "genre:survivors-like"
implementation_status: "pictor-visual"
implementation_owner: "Pictor"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

経験値取得と複数候補の提示により、試行ごとに異なる成長方針を作る。

# 設計思想

毎回の最適解を固定せず、局面で価値が変わる候補を出す。

# 主要機能

- 経験値ドロップ
- 選択肢提示
- レベル閾値

# UXへの寄与

- [選択の喜び](../../ux/b32ba2c4e5dcb7a3.md)
- [期待感](../../ux/91ca175d56b093ef.md)

# ドメイン要素

- [目的と成長](../../domains/objectives-and-progression.md)
- [物語と知識](../../domains/narrative-and-knowledge.md)

# 汎用実装の判定

- **状態**: pictor-visual
- **所有**: Pictor
- **判断**: ゲーム固有の意味付けを持たない視覚表現としてPictorに集約する候補。

# Pictor候補

- [テキスト・ベクター・モーショングラフィックス](../../pictor/text-vector-motion.md)

# 実装上の前提

- [敵群生成と圧力制御](./swarm-spawn.md) の後に実装する。
