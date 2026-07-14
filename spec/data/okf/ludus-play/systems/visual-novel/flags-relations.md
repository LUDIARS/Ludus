---
type: "Ludus Gameplay System"
title: "フラグと関係値"
description: "既読・選択・関係値を状態として管理し、会話や結末を文脈に合わせる。"
tags:
  - "ludus"
  - "gameplay-system"
  - "visual-novel"
  - "split"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:visual-novel:flags-relations"
genre_id: "genre:visual-novel"
implementation_status: "split"
implementation_owner: "Ergo/Ars + Pictor"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

既読・選択・関係値を状態として管理し、会話や結末を文脈に合わせる。

# 設計思想

隠れた数値ではなく、物語上の因果として変化を伝える。

# 主要機能

- 物語フラグ
- 人物ごとの関係値
- 到達条件の評価

# UXへの寄与

- [文脈性](../../ux/4eaa9ee71602bc64.md)
- [人物への愛着](../../ux/c14a58129e045445.md)

# ドメイン要素

- [ルールと状態](../../domains/rules-and-state.md)
- [物語と知識](../../domains/narrative-and-knowledge.md)

# 汎用実装の判定

- **状態**: split
- **所有**: Ergo/Ars + Pictor
- **判断**: ゲーム規則はErgo/Ars、再利用可能な視覚出力はPictorへ分離する候補。

# Pictor候補

- [テキスト・ベクター・モーショングラフィックス](../../pictor/text-vector-motion.md)

# 実装上の前提

- [選択肢とルート分岐](./choice-route.md) の後に実装する。
