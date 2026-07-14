---
type: "Ludus Gameplay System"
title: "テキストアクセシビリティ"
description: "文字サイズ、字幕、色、入力補助を調整し、物語情報に等しくアクセスできるようにする。"
tags:
  - "ludus"
  - "gameplay-system"
  - "visual-novel"
  - "split"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:visual-novel:text-accessibility"
genre_id: "genre:visual-novel"
implementation_status: "split"
implementation_owner: "Ergo/Ars + Pictor"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

文字サイズ、字幕、色、入力補助を調整し、物語情報に等しくアクセスできるようにする。

# 設計思想

物語体験の必須情報を、単一の感覚や操作に閉じ込めない。

# 主要機能

- 文字サイズと表示速度
- 字幕・音量設定
- 色覚配慮と操作リマップ

# UXへの寄与

- [アクセス可能性](../../ux/0fa71ff85bb71375.md)
- [安心感](../../ux/1be380841e916268.md)

# ドメイン要素

- [入力と操作](../../domains/input-and-control.md)
- [空間と移動](../../domains/space-and-navigation.md)
- [情報とUI](../../domains/information-and-ui.md)
- [物語と知識](../../domains/narrative-and-knowledge.md)
- [アクセシビリティと支援](../../domains/accessibility-and-assistance.md)

# 汎用実装の判定

- **状態**: split
- **所有**: Ergo/Ars + Pictor
- **判断**: ゲーム規則はErgo/Ars、再利用可能な視覚出力はPictorへ分離する候補。

# Pictor候補

- [UI描画](../../pictor/ui-rendering.md)
- [テキスト・ベクター・モーショングラフィックス](../../pictor/text-vector-motion.md)
- [シーン描画](../../pictor/scene-rendering.md)

# 実装上の前提

- [バックログ・既読スキップ・オート](./backlog-skip-auto.md) の後に実装する。
