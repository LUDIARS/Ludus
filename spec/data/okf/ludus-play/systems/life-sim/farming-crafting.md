---
type: "Ludus Gameplay System"
title: "栽培・生産・クラフト"
description: "育成と加工の連鎖で、手をかけた結果を資源や環境の変化として返す。"
tags:
  - "ludus"
  - "gameplay-system"
  - "life-sim"
  - "game-specific"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:life-sim:farming-crafting"
genre_id: "genre:life-sim"
implementation_status: "game-specific"
implementation_owner: "Game project"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

育成と加工の連鎖で、手をかけた結果を資源や環境の変化として返す。

# 設計思想

反復作業の量でなく、次の生活を豊かにする連鎖を報いる。

# 主要機能

- 育成段階
- レシピと加工
- 品質・収穫の変動

# UXへの寄与

- [育成の愛着](../../ux/7a648c2f31d54947.md)
- [創意工夫](../../ux/e5ab05fc98565e60.md)

# ドメイン要素

- [ルールと状態](../../domains/rules-and-state.md)

# 汎用実装の判定

- **状態**: game-specific
- **所有**: Game project
- **判断**: 現時点ではジャンル固有の設計として保持し、横断利用の実例が増えた時点で共通化を再評価する。

# Pictor候補

- なし。視覚表現に分離できる要求が具体化した時点で再評価する。

# 実装上の前提

- [日課と行動力](./daily-actions.md) の後に実装する。
