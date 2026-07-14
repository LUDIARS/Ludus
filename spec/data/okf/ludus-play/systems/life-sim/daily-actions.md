---
type: "Ludus Gameplay System"
title: "日課と行動力"
description: "採取、会話、作業などの行動に時間や体力のコストを与え、一日の優先順位を作る。"
tags:
  - "ludus"
  - "gameplay-system"
  - "life-sim"
  - "pictor-visual"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:life-sim:daily-actions"
genre_id: "genre:life-sim"
implementation_status: "pictor-visual"
implementation_owner: "Pictor"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

採取、会話、作業などの行動に時間や体力のコストを与え、一日の優先順位を作る。

# 設計思想

制限は焦らせるためでなく、暮らしにリズムを与える。

# 主要機能

- 行動力消費
- 作業時間
- 回復と休息

# UXへの寄与

- [選択の手触り](../../ux/e8d8247f8bbbdbe0.md)
- [達成感](../../ux/0bba7c376aacad35.md)

# ドメイン要素

- [ルールと状態](../../domains/rules-and-state.md)
- [リソースと経済](../../domains/resources-and-economy.md)
- [音とリズム](../../domains/audio-and-rhythm.md)
- [物語と知識](../../domains/narrative-and-knowledge.md)

# 汎用実装の判定

- **状態**: pictor-visual
- **所有**: Pictor
- **判断**: ゲーム固有の意味付けを持たない視覚表現としてPictorに集約する候補。

# Pictor候補

- [テキスト・ベクター・モーショングラフィックス](../../pictor/text-vector-motion.md)

# 実装上の前提

- [暦・時間・季節](./calendar-time.md) の後に実装する。
