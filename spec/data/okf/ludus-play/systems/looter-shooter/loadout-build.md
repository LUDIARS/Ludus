---
type: "Ludus Gameplay System"
title: "ロードアウトとビルド"
description: "武器、防具、能力、補助効果を相乗する構成として保存する。"
tags:
  - "ludus"
  - "gameplay-system"
  - "looter-shooter"
  - "shared-logic"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:looter-shooter:loadout-build"
genre_id: "genre:looter-shooter"
implementation_status: "shared-logic"
implementation_owner: "Ergo/Ars"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

武器、防具、能力、補助効果を相乗する構成として保存する。

# 設計思想

複雑な効果計算を説明可能にする。

# 主要機能

- 装備枠
- 相乗効果
- プリセット

# UXへの寄与

- [創造性](../../ux/8f90c76d051ae071.md)
- [見通し](../../ux/7fb4b30947b02823.md)

# ドメイン要素

- [メタゲームと運用](../../domains/meta-and-live-operations.md)
- [アクセシビリティと支援](../../domains/accessibility-and-assistance.md)

# 汎用実装の判定

- **状態**: shared-logic
- **所有**: Ergo/Ars
- **判断**: 複数ジャンルで再利用しうるが、描画専用のPictorではなく上位のゲームロジック層が所有する。

# Pictor候補

- なし。視覚表現に分離できる要求が具体化した時点で再評価する。

# 実装上の前提

- [装備品質と特性](./procedural-affix.md) の後に実装する。
