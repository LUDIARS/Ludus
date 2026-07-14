---
type: "Ludus Gameplay System"
title: "選択肢とルート分岐"
description: "選択により次の場面・結末・閲覧情報を変化させる。"
tags:
  - "ludus"
  - "gameplay-system"
  - "visual-novel"
  - "pictor-visual"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:visual-novel:choice-route"
genre_id: "genre:visual-novel"
implementation_status: "pictor-visual"
implementation_owner: "Pictor"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

選択により次の場面・結末・閲覧情報を変化させる。

# 設計思想

選択の頻度より、選択後に生じる意味の差を大切にする。

# 主要機能

- 条件付き選択肢
- 分岐先の決定
- 既読ルートの追跡

# UXへの寄与

- [選択の重み](../../ux/afd5d3c7460e8707.md)
- [再読の動機](../../ux/50a4a20a4c68de56.md)

# ドメイン要素

- [物語と知識](../../domains/narrative-and-knowledge.md)

# 汎用実装の判定

- **状態**: pictor-visual
- **所有**: Pictor
- **判断**: ゲーム固有の意味付けを持たない視覚表現としてPictorに集約する候補。

# Pictor候補

- [テキスト・ベクター・モーショングラフィックス](../../pictor/text-vector-motion.md)

# 実装上の前提

- [台本とシーン再生](./script-scene.md) の後に実装する。
