---
type: "Ludus Gameplay System"
title: "会話と選択"
description: "対話の選択で情報・関係・進行条件を変え、物語への関与を生む。"
tags:
  - "ludus"
  - "gameplay-system"
  - "adventure"
  - "split"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:adventure:dialogue-choice"
genre_id: "genre:adventure"
implementation_status: "split"
implementation_owner: "Ergo/Ars + Pictor"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

対話の選択で情報・関係・進行条件を変え、物語への関与を生む。

# 設計思想

正解探しだけにせず、情報の取り方にも個性を持たせる。

# 主要機能

- 選択肢表示
- 会話状態の分岐
- 既知情報に応じた台詞

# UXへの寄与

- [主体性](../../ux/3a388fbe295034b6.md)
- [人物理解](../../ux/32aa5b6a9c6dca8a.md)

# ドメイン要素

- [ルールと状態](../../domains/rules-and-state.md)
- [情報とUI](../../domains/information-and-ui.md)
- [物語と知識](../../domains/narrative-and-knowledge.md)

# 汎用実装の判定

- **状態**: split
- **所有**: Ergo/Ars + Pictor
- **判断**: ゲーム規則はErgo/Ars、再利用可能な視覚出力はPictorへ分離する候補。

# Pictor候補

- [UI描画](../../pictor/ui-rendering.md)
- [テキスト・ベクター・モーショングラフィックス](../../pictor/text-vector-motion.md)

# 実装上の前提

- [環境パズルと解決判定](./puzzle-resolution.md) の後に実装する。
