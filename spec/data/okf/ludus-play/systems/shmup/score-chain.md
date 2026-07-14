---
type: "Ludus Gameplay System"
title: "スコアとチェイン"
description: "連続撃破や危険行動に得点報酬を与え、生存以外の挑戦目標を作る。"
tags:
  - "ludus"
  - "gameplay-system"
  - "shmup"
  - "split"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:shmup:score-chain"
genre_id: "genre:shmup"
implementation_status: "split"
implementation_owner: "Ergo/Ars + Pictor"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

連続撃破や危険行動に得点報酬を与え、生存以外の挑戦目標を作る。

# 設計思想

安全行動を否定せず、欲張る選択に魅力を与える。

# 主要機能

- 連続撃破条件
- 倍率
- スコア表示

# UXへの寄与

- [挑戦意欲](../../ux/3271670179421220.md)
- [技能の可視化](../../ux/b8acac36166895a6.md)

# ドメイン要素

- [目的と成長](../../domains/objectives-and-progression.md)
- [情報とUI](../../domains/information-and-ui.md)

# 汎用実装の判定

- **状態**: split
- **所有**: Ergo/Ars + Pictor
- **判断**: ゲーム規則はErgo/Ars、再利用可能な視覚出力はPictorへ分離する候補。

# Pictor候補

- [UI描画](../../pictor/ui-rendering.md)
- [テキスト・ベクター・モーショングラフィックス](../../pictor/text-vector-motion.md)

# 実装上の前提

- [敵編隊とウェーブ出現](./enemy-wave.md) の後に実装する。
