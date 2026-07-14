---
type: "Ludus Gameplay System"
title: "暦・時間・季節"
description: "一日・季節・イベントの周期を管理し、生活行動に意味のあるリズムを与える。"
tags:
  - "ludus"
  - "gameplay-system"
  - "life-sim"
  - "shared-logic"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:life-sim:calendar-time"
genre_id: "genre:life-sim"
implementation_status: "shared-logic"
implementation_owner: "Ergo/Ars"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

一日・季節・イベントの周期を管理し、生活行動に意味のあるリズムを与える。

# 設計思想

待ち時間ではなく、選択の文脈として時間を使う。

# 主要機能

- 時刻進行
- 季節変化
- 予定イベント

# UXへの寄与

- [生活感](../../ux/2949ba26bd201d46.md)
- [計画性](../../ux/5cc46986467652bb.md)

# ドメイン要素

- [ルールと状態](../../domains/rules-and-state.md)
- [音とリズム](../../domains/audio-and-rhythm.md)

# 汎用実装の判定

- **状態**: shared-logic
- **所有**: Ergo/Ars
- **判断**: 複数ジャンルで再利用しうるが、描画専用のPictorではなく上位のゲームロジック層が所有する。

# Pictor候補

- なし。視覚表現に分離できる要求が具体化した時点で再評価する。

# 実装上の前提

- このジャンル内で先行関係は定義されていない。
