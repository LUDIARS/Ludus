---
type: "Ludus Gameplay System"
title: "ビルド相乗と進化"
description: "武器・補助効果・条件達成を組み合わせ、強力な進化と個性的な戦い方を生む。"
tags:
  - "ludus"
  - "gameplay-system"
  - "survivors-like"
  - "game-specific"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:survivors-like:build-evolution"
genre_id: "genre:survivors-like"
implementation_status: "game-specific"
implementation_owner: "Game project"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

武器・補助効果・条件達成を組み合わせ、強力な進化と個性的な戦い方を生む。

# 設計思想

単純な数値上昇より、行動の見え方が変わる相乗を作る。

# 主要機能

- 相乗ルール
- 進化条件
- ビルド履歴

# UXへの寄与

- [発見の快感](../../ux/d1216983d635067c.md)
- [自己表現](../../ux/acdb56909eecad60.md)

# ドメイン要素

- [ルールと状態](../../domains/rules-and-state.md)
- [目的と成長](../../domains/objectives-and-progression.md)
- [アクセシビリティと支援](../../domains/accessibility-and-assistance.md)

# 汎用実装の判定

- **状態**: game-specific
- **所有**: Game project
- **判断**: 現時点ではジャンル固有の設計として保持し、横断利用の実例が増えた時点で共通化を再評価する。

# Pictor候補

- なし。視覚表現に分離できる要求が具体化した時点で再評価する。

# 実装上の前提

- [経験値とレベルアップ選択](./experience-choice.md) の後に実装する。
