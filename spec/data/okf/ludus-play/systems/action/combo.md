---
type: "Ludus Gameplay System"
title: "コンボシステム"
description: "連続攻撃による報酬とリズムを提供し、プレイヤースキルを数値化して達成感を高める。"
tags:
  - "ludus"
  - "gameplay-system"
  - "action"
  - "split"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:action:combo"
genre_id: "genre:action"
implementation_status: "split"
implementation_owner: "Ergo/Ars + Pictor"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

連続攻撃による報酬とリズムを提供し、プレイヤースキルを数値化して達成感を高める。

# 設計思想

『リズムゲーム的な要素』をアクションに持ち込む。単純な連打ではなくタイミングと選択が重要になるよう設計。ボーナスは魅力的だが、リスクを冒してまで狙う価値があるかのバランス調整が鍵。

# 主要機能

- コンボカウント (連続ヒット数の追跡と表示)
- コンボウィンドウ (次攻撃までの許容時間管理)
- コンボ倍率 (ダメージ/スコアボーナス)
- コンボ中断判定 (ミス/被弾/時間切れでリセット)
- コンボルート (特定攻撃順序の特殊技)

# UXへの寄与

- [スキル可視化](../../ux/85c319d310a2144a.md)
- [リスク・リターン](../../ux/73858d4b168c7e3b.md)
- [リプレイ性](../../ux/d927d1c812e521aa.md)

# ドメイン要素

- [アクターと役割](../../domains/actors.md)
- [対立と解決](../../domains/conflict-and-resolution.md)
- [ルールと状態](../../domains/rules-and-state.md)
- [目的と成長](../../domains/objectives-and-progression.md)
- [情報とUI](../../domains/information-and-ui.md)
- [音とリズム](../../domains/audio-and-rhythm.md)

# 汎用実装の判定

- **状態**: split
- **所有**: Ergo/Ars + Pictor
- **判断**: ゲーム規則はErgo/Ars、再利用可能な視覚出力はPictorへ分離する候補。

# Pictor候補

- [UI描画](../../pictor/ui-rendering.md)
- [テキスト・ベクター・モーショングラフィックス](../../pictor/text-vector-motion.md)

# 実装上の前提

- [ヒットストップ (Hit Pause/Hit Freeze)](./hit-stop.md) の後に実装する。
